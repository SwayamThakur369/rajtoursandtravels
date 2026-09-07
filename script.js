/**
 * Raj Tours & Travels - Interactive Script
 * Provides Sticky Header, Mega Menu, Mobile Drawer, Carousels,
 * Lead Enquiry Modal, and Direct Navigation to Standalone Destination Pages.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Ensure responsive stylesheet is loaded
    if (!document.querySelector('link[href*="responsive.css"]')) {
        const respLink = document.createElement('link');
        respLink.rel = 'stylesheet';
        respLink.href = '/responsive.css';
        document.head.appendChild(respLink);
    }

    // Inject global cleanup style for broken Next.js megamenu remnants
    const style = document.createElement('style');
    style.textContent = `
        div[class*="DesktopDropdown"],
        div[class*="header_megaMenuDropdownItem"],
        div[class*="header_megaMenuHidden"] {
            display: none !important;
        }
    `;
    document.head.appendChild(style);

    initStickyHeader();
    initMegaMenu();
    initMobileDrawer();
    initCarousels();
    initLazyImages();
    initEnquiryModal();
    initSmartLinkInterceptor();
    initCurrencyPicker();
    initTabBarFilter();
});

// Standalone Destination Pages Map
const destinationPagesMap = {
    'ladakh': '/ladakh-tour.html',
    'spiti': '/spiti-valley-tour.html',
    'kashmir': '/kashmir-tour.html',
    'kerala': '/kerala-tour.html',
    'rajasthan': '/rajasthan-tour.html',
    'himachal': '/himachal-tour.html',
    'shimla': '/himachal-tour.html',
    'manali': '/himachal-tour.html',
    'andaman': '/andaman-tour.html',
    'sikkim': '/sikkim-tour.html',
    'darjeeling': '/sikkim-tour.html',
    'meghalaya': '/meghalaya-tour.html',
    'northeast': '/northeast-tour.html',
    'north east': '/northeast-tour.html'
};

// 1. Sticky Top Navigation Bar on Scroll
function initStickyHeader() {
    const stickyHeader = document.querySelector('.WhiteStickyHeader_stickyHeaderContainer__qd89_');
    if (!stickyHeader) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 120) {
            stickyHeader.classList.remove('WhiteStickyHeader_hidden___ZbLF');
            stickyHeader.classList.add('WhiteStickyHeader_visible__WiFIx');
        } else {
            stickyHeader.classList.add('WhiteStickyHeader_hidden___ZbLF');
            stickyHeader.classList.remove('WhiteStickyHeader_visible__WiFIx');
        }
    });
}

// 2. Mega Menu Dropdown Toggle
function initMegaMenu() {
    const navItems = document.querySelectorAll('.header_navLinkItem__eyAWZ');
    const megaMenuDropdown = document.querySelector('.header_megaMenuDropdownItem___YCV_');
    const megaContainer = document.querySelector('.header_megaMenuFullWidthContainer__R6MTT');

    if (!megaMenuDropdown) return;

    navItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            megaMenuDropdown.classList.remove('header_megaMenuHidden__wTDTX');
        });
    });

    if (megaContainer) {
        megaContainer.addEventListener('mouseleave', () => {
            megaMenuDropdown.classList.add('header_megaMenuHidden__wTDTX');
        });
    }

    document.addEventListener('click', (e) => {
        if (megaContainer && !megaContainer.contains(e.target) && !e.target.closest('.header_navLinkItem__eyAWZ')) {
            megaMenuDropdown.classList.add('header_megaMenuHidden__wTDTX');
        }
    });
}

// 3. Mobile Navigation Drawer Toggle
function initMobileDrawer() {
    const hamburgerBtn = document.querySelector('.NavBar2_drawer__5H_c7') || document.querySelector('.header_drawer__icon');
    const mobileDrawer = document.querySelector('.MobileDrawer_wrapper__5PR7b');
    const closeBtn = document.querySelector('.MobileDrawer_topContainer__b5T20 button') || document.querySelector('.MobileDrawer_wrapper__5PR7b button');

    if (hamburgerBtn && mobileDrawer) {
        hamburgerBtn.addEventListener('click', () => {
            mobileDrawer.classList.add('MobileDrawer_visible__vxXC8');
        });
    }

    if (closeBtn && mobileDrawer) {
        closeBtn.addEventListener('click', () => {
            mobileDrawer.classList.remove('MobileDrawer_visible__vxXC8');
        });
    }
}

// 4. Horizontal Scroll & Carousel Navigation
function initCarousels() {
    const carouselContainers = document.querySelectorAll('.GenericCarousel_genericCarouselContainer__Uavmv, .TilesCarousel_wrapper__Vjzc7, .ProductCarousel_wrapper__W201C');

    carouselContainers.forEach(carousel => {
        const scrollBox = carousel.querySelector('.GenericCarousel_genericCarouselItemsContainer__pCJXc, .TilesCarousel_mobileSmoothScrollContainer__D6X1Q, .ProductCarousel_carouselContainerClass__wZlkB');
        const leftBtn = carousel.querySelector('.GenericCarousel_leftIconContainer__zUbzh, .GenericCarousel_leftArrowIconBox__orusP, .TilesCarousel_leftArrowIconBox__yb4JJ');
        const rightBtn = carousel.querySelector('.GenericCarousel_rightIconContainer__AbXWk, .GenericCarousel_rightArrowIconBox__HXqb_, .TilesCarousel_rightArrowIconBox__0S6ie');

        if (!scrollBox) return;

        if (leftBtn) {
            leftBtn.addEventListener('click', () => {
                scrollBox.scrollBy({ left: -360, behavior: 'smooth' });
            });
        }

        if (rightBtn) {
            rightBtn.addEventListener('click', () => {
                scrollBox.scrollBy({ left: 360, behavior: 'smooth' });
            });
        }
    });
}

// 5. Image Lazy Loading & Fallbacks
function initLazyImages() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    lazyImages.forEach(img => {
        const dataSrc = img.getAttribute('data-src');
        if (dataSrc) {
            img.src = dataSrc;
        }
        img.onerror = () => {
            img.src = 'https://media1.thrillophilia.com/thrillo-logo-v2.webp';
        };
    });
}

// 6. Lead Enquiry Modal
function initEnquiryModal() {
    let modalOverlay = document.getElementById('tp-enquiry-modal');
    if (!modalOverlay) {
        modalOverlay = document.createElement('div');
        modalOverlay.id = 'tp-enquiry-modal';
        modalOverlay.style.cssText = `
            display: none;
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.65);
            z-index: 99999;
            align-items: center;
            justify-content: center;
            backdrop-filter: blur(4px);
            padding: 15px;
        `;

        modalOverlay.innerHTML = `
            <div style="
                background: #ffffff;
                border-radius: 20px;
                max-width: 450px;
                width: 100%;
                padding: 30px;
                box-shadow: 0 10px 40px rgba(0,0,0,0.3);
                position: relative;
                font-family: Inter, Poppins, sans-serif;
                animation: tpModalFade 0.3s ease-out;
            ">
                <button id="tp-modal-close" style="
                    position: absolute;
                    top: 15px;
                    right: 20px;
                    border: none;
                    background: #f4f4f4;
                    border-radius: 50%;
                    width: 32px;
                    height: 32px;
                    font-size: 18px;
                    cursor: pointer;
                    color: #515151;
                ">&times;</button>
                <div style="text-align: center; margin-bottom: 20px;">
                    <h2 id="tp-modal-title" style="margin: 0; color: #202020; font-size: 22px; font-weight: 700;">Plan Your Dream Trip</h2>
                    <p id="tp-modal-subtitle" style="color: #8e8e8e; font-size: 14px; margin-top: 5px;">Get customized packages & expert advice from Raj Tours & Travels experts.</p>
                </div>
                <form id="tp-enquiry-form" style="display: flex; flex-direction: column; gap: 14px;">
                    <div>
                        <label style="font-size: 13px; font-weight: 600; color: #515151; display: block; margin-bottom: 5px;">Full Name</label>
                        <input type="text" placeholder="Enter your name" required style="width: 100%; padding: 12px; border: 1px solid #e0e0e0; border-radius: 8px; font-size: 14px; box-sizing: border-box; outline: none;" />
                    </div>
                    <div>
                        <label style="font-size: 13px; font-weight: 600; color: #515151; display: block; margin-bottom: 5px;">Phone Number</label>
                        <input type="tel" placeholder="+91 Enter 10 digit number" required style="width: 100%; padding: 12px; border: 1px solid #e0e0e0; border-radius: 8px; font-size: 14px; box-sizing: border-box; outline: none;" />
                    </div>
                    <div>
                        <label style="font-size: 13px; font-weight: 600; color: #515151; display: block; margin-bottom: 5px;">Destination / Tour</label>
                        <input id="tp-modal-destination-input" type="text" placeholder="Where do you want to travel?" style="width: 100%; padding: 12px; border: 1px solid #e0e0e0; border-radius: 8px; font-size: 14px; box-sizing: border-box; outline: none;" />
                    </div>
                    <button type="submit" style="
                        margin-top: 10px;
                        background: #f36812;
                        color: #ffffff;
                        padding: 14px;
                        border: none;
                        border-radius: 30px;
                        font-weight: 600;
                        font-size: 15px;
                        cursor: pointer;
                    ">Request Free Callback</button>
                </form>
                <div id="tp-form-success" style="display: none; text-align: center; color: #19ad6f; font-weight: 600; margin-top: 15px;">
                    ✓ Thank you! Our travel expert will contact you shortly.
                </div>
            </div>
        `;
        document.body.appendChild(modalOverlay);
    }

    window.openTpEnquiryModal = (customTitle, customDestination) => {
        const titleEl = document.getElementById('tp-modal-title');
        const destInput = document.getElementById('tp-modal-destination-input');
        if (customTitle && titleEl) titleEl.textContent = customTitle;
        if (customDestination && destInput) destInput.value = customDestination;
        
        modalOverlay.style.display = 'flex';
    };

    const closeModal = () => {
        modalOverlay.style.display = 'none';
        const successMsg = document.getElementById('tp-form-success');
        if (successMsg) successMsg.style.display = 'none';
    };

    document.addEventListener('click', (e) => {
        const target = e.target.closest('.productCard_filledButton__heoZf, .WhiteStickyHeader_headerCtaButton__d09Oh, .StickyBtn_stickyEnquiryBtn__iIao7, .header_headerActionItem__AE7xu');
        if (target && !target.textContent.includes('INR')) {
            e.preventDefault();
            window.openTpEnquiryModal('Plan Your Customized Trip', '');
        }
    });

    const closeBtn = document.getElementById('tp-modal-close');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    const form = document.getElementById('tp-enquiry-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const successMsg = document.getElementById('tp-form-success');
            if (successMsg) successMsg.style.display = 'block';
            setTimeout(() => {
                closeModal();
                form.reset();
            }, 2000);
        });
    }
}

// 7. Tab Bar Filter & Direct Standalone Page Navigation
function initTabBarFilter() {
    const tabs = document.querySelectorAll('.StickyTabBar_tagContainer__qSbZK');
    const sections = document.querySelectorAll('.HomePageBody_homePageTourSectionContainer__8FhHL');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => {
                const label = t.querySelector('.StickyTabBar_tagLabel__SYuPT');
                if (label) label.classList.remove('StickyTabBar_activeTagLabel__wieOe');
                const border = t.querySelector('.StickyTabBar_borderBottom___xxrg');
                if (border) border.classList.remove('StickyTabBar_borderBottom_visible__hac9M');
            });

            const tabLabel = tab.querySelector('.StickyTabBar_tagLabel__SYuPT');
            if (tabLabel) tabLabel.classList.add('StickyTabBar_activeTagLabel__wieOe');
            const tabBorder = tab.querySelector('.StickyTabBar_borderBottom___xxrg');
            if (tabBorder) tabBorder.classList.add('StickyTabBar_borderBottom_visible__hac9M');

            const destName = tabLabel ? tabLabel.textContent.trim().toLowerCase() : '';

            if (destName === 'explore') {
                sections.forEach(s => s.style.display = 'block');
                return;
            }

            // Direct standalone page navigation
            for (let key in destinationPagesMap) {
                if (destName.includes(key)) {
                    window.location.href = destinationPagesMap[key];
                    return;
                }
            }

            // Scroll into section if present on homepage
            sections.forEach(sec => {
                const heading = sec.querySelector('h2');
                if (heading && heading.textContent.toLowerCase().includes(destName)) {
                    sec.style.display = 'block';
                    sec.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            });
        });
    });
}

// 8. Package Card Click Handler -> Opens Dedicated Standalone Page!
function initSmartLinkInterceptor() {
    document.addEventListener('click', (e) => {
        const productCard = e.target.closest('.productCard_container__aeQWM, .product-card-component, .ProductCarousel_productCardContainer__95wik');
        const link = e.target.closest('a');

        if (productCard && !e.target.closest('.productCard_filledButton__heoZf')) {
            e.preventDefault();
            const titleEl = productCard.querySelector('.productCard_name__G3d6e, h3');
            const titleText = titleEl ? titleEl.textContent.toLowerCase() : '';

            for (let key in destinationPagesMap) {
                if (titleText.includes(key)) {
                    window.location.href = destinationPagesMap[key];
                    return;
                }
            }
            // Default fallback page
            window.location.href = '/himachal-tour.html';
            return;
        }

        if (!link) return;
        const href = link.getAttribute('href');
        if (!href || href === '#' || href.startsWith('javascript:')) return;

        const cleanHref = href.split('#')[0].split('?')[0].toLowerCase();
        
        for (let key in destinationPagesMap) {
            if (cleanHref.includes(key)) {
                e.preventDefault();
                window.location.href = destinationPagesMap[key];
                return;
            }
        }
    });
}

// 9. Currency Selector
function initCurrencyPicker() {
    const currencyButtons = document.querySelectorAll('.header_headerActionItem__AE7xu, .NavBar2_currencyPicker__tISSd');
    currencyButtons.forEach(btn => {
        if (btn.textContent.includes('INR') || btn.textContent.includes('₹')) {
            btn.style.cursor = 'pointer';
        }
    });
}
