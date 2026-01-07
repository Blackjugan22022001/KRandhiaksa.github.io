// DOM Elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const pdfModal = document.getElementById('pdfModal');
const pdfModalTitle = document.getElementById('pdfModalTitle');
const pdfModalClose = document.getElementById('pdfModalClose');
const pdfViewerContainer = document.getElementById('pdfViewerContainer');
const pdfCanvas = document.getElementById('pdfCanvas');
const pdfLoading = document.getElementById('pdfLoading');
const pdfError = document.getElementById('pdfError');
const pdfErrorMessage = document.getElementById('pdfErrorMessage');
const pdfPrev = document.getElementById('pdfPrev');
const pdfNext = document.getElementById('pdfNext');
const pdfCurrentPage = document.getElementById('pdfCurrentPage');
const pdfTotalPages = document.getElementById('pdfTotalPages');
const pdfZoomOut = document.getElementById('pdfZoomOut');
const pdfZoomIn = document.getElementById('pdfZoomIn');
const pdfZoomLevel = document.getElementById('pdfZoomLevel');
const pdfDownloadLink = document.getElementById('pdfDownloadLink');

// PDF.js variables
let pdfDoc = null;
let pageNum = 1;
let pageRendering = false;
let pageNumPending = null;
let scale = 1.0;
const scaleStep = 0.1;
const minScale = 0.5;
const maxScale = 3.0;
let currentPdfUrl = '';
let currentPdfTitle = '';
let startPage = 1;

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Close mobile menu with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Smooth scroll untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.classList.contains('pdf-view-btn') || this.classList.contains('pdf-download-btn')) {
            return;
        }
        
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Efek scroll untuk header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        header.style.padding = '0.7rem 0';
    } else {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        header.style.padding = '1rem 0';
    }
    
    // Highlight menu aktif
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a[href^="#"], .mobile-menu a[href^="#"]');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// PDF Viewer Functions
function renderPage(num) {
    if (!pdfDoc) return;
    
    pageRendering = true;
    
    // Get page
    pdfDoc.getPage(num).then(function(page) {
        const viewport = page.getViewport({ scale: scale });
        const canvas = pdfCanvas;
        const context = canvas.getContext('2d');
        
        // Set canvas dimensions
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        
        // Render PDF page into canvas context
        const renderContext = {
            canvasContext: context,
            viewport: viewport
        };
        
        const renderTask = page.render(renderContext);
        
        renderTask.promise.then(function() {
            pageRendering = false;
            
            if (pageNumPending !== null) {
                renderPage(pageNumPending);
                pageNumPending = null;
            }
            
            // Update page info
            pdfCurrentPage.value = num;
            updateNavButtons();
        });
    }).catch(function(error) {
        console.error('Error rendering page:', error);
        showPdfError('Gagal merender halaman PDF.');
    });
}

function queueRenderPage(num) {
    if (pageRendering) {
        pageNumPending = num;
    } else {
        renderPage(num);
    }
}

function onPrevPage() {
    if (pageNum <= 1) return;
    pageNum--;
    queueRenderPage(pageNum);
}

function onNextPage() {
    if (pageNum >= pdfDoc.numPages) return;
    pageNum++;
    queueRenderPage(pageNum);
}

function goToPage() {
    const page = parseInt(pdfCurrentPage.value);
    if (page >= 1 && page <= pdfDoc.numPages) {
        pageNum = page;
        queueRenderPage(pageNum);
    } else {
        pdfCurrentPage.value = pageNum;
    }
}

function updateNavButtons() {
    pdfPrev.disabled = pageNum <= 1;
    pdfNext.disabled = pageNum >= pdfDoc.numPages;
    pdfTotalPages.textContent = `/ ${pdfDoc.numPages}`;
}

function zoomIn() {
    if (scale >= maxScale) return;
    scale += scaleStep;
    updateZoom();
    renderPage(pageNum);
}

function zoomOut() {
    if (scale <= minScale) return;
    scale -= scaleStep;
    updateZoom();
    renderPage(pageNum);
}

function updateZoom() {
    pdfZoomLevel.textContent = `${Math.round(scale * 100)}%`;
}

function showPdfError(message) {
    pdfLoading.style.display = 'none';
    pdfErrorMessage.textContent = message;
    pdfError.style.display = 'block';
    pdfCanvas.style.display = 'none';
}

function hidePdfError() {
    pdfError.style.display = 'none';
    pdfCanvas.style.display = 'block';
}

function retryLoadPDF() {
    hidePdfError();
    loadPDF(currentPdfUrl, startPage);
}

// Load PDF document
function loadPDF(url, startPageNum = 1) {
    // Reset state
    pdfDoc = null;
    pageNum = startPageNum;
    scale = 1.0;
    
    // Show loading
    pdfLoading.style.display = 'flex';
    pdfCanvas.style.display = 'none';
    hidePdfError();
    
    // Disable controls
    pdfPrev.disabled = true;
    pdfNext.disabled = true;
    pdfZoomOut.disabled = true;
    pdfZoomIn.disabled = true;
    pdfCurrentPage.disabled = true;
    
    // Update modal title
    pdfModalTitle.innerHTML = `<i class="fas fa-file-pdf"></i> <span>${currentPdfTitle} - Memuat...</span>`;
    
    // Load PDF
    pdfjsLib.getDocument(url).promise.then(function(pdfDoc_) {
        pdfDoc = pdfDoc_;
        
        // Update UI
        pdfTotalPages.textContent = `/ ${pdfDoc.numPages}`;
        pdfCurrentPage.value = startPageNum;
        pdfCurrentPage.max = pdfDoc.numPages;
        pdfCurrentPage.disabled = false;
        
        // Update zoom
        updateZoom();
        
        // Enable controls
        pdfZoomOut.disabled = false;
        pdfZoomIn.disabled = false;
        
        // Hide loading
        pdfLoading.style.display = 'none';
        pdfCanvas.style.display = 'block';
        
        // Render first page
        renderPage(startPageNum);
        
        // Update modal title
        pdfModalTitle.innerHTML = `<i class="fas fa-file-pdf"></i> <span>${currentPdfTitle} (${pdfDoc.numPages} halaman)</span>`;
        
        // Set download link
        pdfDownloadLink.href = url;
        
    }).catch(function(error) {
        console.error('Error loading PDF:', error);
        showPdfError('Gagal memuat dokumen PDF. Pastikan file PDF tersedia.');
    });
}

// Open PDF modal
function openPdfViewer(pdfUrl, title, startPage = 1) {
    currentPdfUrl = pdfUrl;
    currentPdfTitle = title;
    startPage = startPage;
    
    // Open modal
    pdfModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Load PDF
    loadPDF(pdfUrl, startPage);
}

// Close PDF modal
function closePdfViewer() {
    pdfModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event listeners for PDF viewer
pdfModalClose.addEventListener('click', closePdfViewer);
pdfPrev.addEventListener('click', onPrevPage);
pdfNext.addEventListener('click', onNextPage);
pdfCurrentPage.addEventListener('change', goToPage);
pdfZoomOut.addEventListener('click', zoomOut);
pdfZoomIn.addEventListener('click', zoomIn);

// Close modal when clicking outside
pdfModal.addEventListener('click', function(e) {
    if (e.target === pdfModal) {
        closePdfViewer();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && pdfModal.classList.contains('active')) {
        closePdfViewer();
    }
    
    // Keyboard navigation in PDF viewer
    if (pdfModal.classList.contains('active')) {
        if (e.key === 'ArrowLeft' && !pdfPrev.disabled) {
            onPrevPage();
            e.preventDefault();
        } else if (e.key === 'ArrowRight' && !pdfNext.disabled) {
            onNextPage();
            e.preventDefault();
        } else if (e.key === '+' || e.key === '=') {
            zoomIn();
            e.preventDefault();
        } else if (e.key === '-' || e.key === '_') {
            zoomOut();
            e.preventDefault();
        }
    }
});

// Add event listeners to PDF view buttons
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.pdf-view-btn').forEach(button => {
        button.addEventListener('click', function() {
            const pdfUrl = this.getAttribute('data-pdf');
            const title = this.getAttribute('data-title');
            const startPage = parseInt(this.getAttribute('data-page')) || 1;
            
            openPdfViewer(pdfUrl, title, startPage);
        });
    });
    
    // Prevent default for download buttons
    document.querySelectorAll('.btn-download').forEach(button => {
        button.addEventListener('click', function(e) {
            const fileName = this.getAttribute('href').split('/').pop();
            console.log(`File diunduh: ${fileName}`);
            // Tracking bisa ditambahkan di sini
        });
    });
});

// Animasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    // Animasi fade in untuk konten
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // Animasi logo pada hero section
    const mainLogo = document.querySelector('.main-logo');
    if (mainLogo) {
        mainLogo.style.opacity = '0';
        mainLogo.style.transform = 'scale(0.8) rotate(-10deg)';
        
        setTimeout(() => {
            mainLogo.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            mainLogo.style.opacity = '1';
            mainLogo.style.transform = 'scale(1) rotate(0deg)';
        }, 300);
    }
    
    // Animasi card saat scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe cards
    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // PDF.js compatibility check
    if (typeof pdfjsLib === 'undefined') {
        console.error('PDF.js library tidak ditemukan. Pastikan CDN terhubung.');
        
        // Fallback: ubah tombol PDF view menjadi link biasa
        document.querySelectorAll('.pdf-view-btn').forEach(button => {
            const pdfUrl = button.getAttribute('data-pdf');
            const title = button.getAttribute('data-title');
            
            // Ubah button menjadi link
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.target = '_blank';
            link.className = 'btn-view';
            link.innerHTML = '<i class="fas fa-external-link-alt"></i> Buka di Tab Baru';
            
            button.parentNode.replaceChild(link, button);
        });
    }
});
