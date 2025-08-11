 // Wait for the DOM to be fully loaded
        document.addEventListener('DOMContentLoaded', function() {
            
            const header = document.getElementById('header');
            const navToggle = document.getElementById('nav-toggle');
            const navList = document.getElementById('nav-list');
            const yearSpan = document.getElementById('year');

            // --- Navbar scroll effect ---
            // Adds a 'scrolled' class to the header when the page is scrolled down
            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            // --- Toggle mobile navigation ---
            // Toggles the 'active' class on the nav-list when the hamburger icon is clicked
            if (navToggle) {
                navToggle.addEventListener('click', function() {
                    navList.classList.toggle('active');
                });
            }
            
            // --- Close mobile nav when a link is clicked ---
            // This improves user experience on single-page applications
            const navLinks = document.querySelectorAll('.nav-list a');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (navList.classList.contains('active')) {
                        navList.classList.remove('active');
                    }
                });
            });

            // --- Set current year in footer ---
            if (yearSpan) {
                yearSpan.textContent = new Date().getFullYear();
            }

        });