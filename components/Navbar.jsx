'use client'
import React, { useEffect } from "react";

function Navbar() {
    useEffect(() => {
        // page navigation variables
        const navigationLinks = document.querySelectorAll("[data-nav-link]");
        const pages = document.querySelectorAll("[data-page]");

        const setActivePage = (pageName) => {
            const name = (pageName || "").toLowerCase();
            for (let j = 0; j < pages.length; j++) {
                if (pages[j].dataset.page === name) {
                    pages[j].classList.add("active");
                    window.scrollTo(0, 0);
                } else {
                    pages[j].classList.remove("active");
                }
            }

            for (let i = 0; i < navigationLinks.length; i++) {
                const linkName = (navigationLinks[i].innerHTML || "").toLowerCase();
                if (linkName === name) navigationLinks[i].classList.add("active");
                else navigationLinks[i].classList.remove("active");
            }
        };

        const onNavClick = function () {
            setActivePage(this.innerHTML);
        };

        // add event to all nav link
        for (let i = 0; i < navigationLinks.length; i++) {
            navigationLinks[i].addEventListener("click", onNavClick);
        }

        const applyHash = () => {
            const hash = (window.location.hash || "").replace("#", "").toLowerCase();
            if (!hash) return;
            // allow /#blog to activate <article data-page="blog">
            setActivePage(hash);
        };

        applyHash();
        window.addEventListener("hashchange", applyHash);

        return () => {
            for (let i = 0; i < navigationLinks.length; i++) {
                navigationLinks[i].removeEventListener("click", onNavClick);
            }
            window.removeEventListener("hashchange", applyHash);
        };
    }, []);
    return (
        <div>
            <nav className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <button className="navbar-link active" data-nav-link="">
                            About
                        </button>
                    </li>
                    <li className="navbar-item">
                        <button className="navbar-link" data-nav-link="">
                            Resume
                        </button>
                    </li>
                    <li className="navbar-item">
                        <button className="navbar-link" data-nav-link="">
                            Portfolio
                        </button>
                    </li>
                    <li className="navbar-item">
                        <button className="navbar-link" data-nav-link="">
                            Blog
                        </button>
                    </li>
                    <li className="navbar-item">
                        <button className="navbar-link" data-nav-link="">
                            Contact
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
