document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. Password Validation Logic
    // ==========================================
    const validatePassword = (password) => {
        // Minimum 6 characters for testing purposes
        const regex = /^.{6,}$/;
        return regex.test(password);
    };

    // Helper to show inline errors
    const showError = (formElement, message) => {
        let errorEl = formElement.querySelector('.auth-error-msg');
        if (!errorEl) {
            errorEl = document.createElement('div');
            errorEl.className = 'auth-error-msg';
            errorEl.style.color = '#ef4444'; // Red
            errorEl.style.fontSize = '0.85rem';
            errorEl.style.marginTop = '1rem';
            errorEl.style.padding = '0.75rem';
            errorEl.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
            errorEl.style.border = '1px solid #ef4444';
            errorEl.style.borderRadius = 'var(--radius-sm)';
            errorEl.style.textAlign = 'center';
            
            // Insert before the submit button
            const submitBtn = formElement.querySelector('button[type="submit"]');
            formElement.insertBefore(errorEl, submitBtn);
        }
        errorEl.textContent = message;
    };

    const clearError = (formElement) => {
        const errorEl = formElement.querySelector('.auth-error-msg');
        if (errorEl) errorEl.remove();
    };


    // ==========================================
    // 2. Authentication Form Handlers
    // ==========================================
    const authForms = document.querySelectorAll('.auth-form');

    authForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            clearError(form);

            // Get form inputs
            const emailInput = form.querySelector('input[type="email"]');
            const passwordInputs = form.querySelectorAll('input[type="password"]'); // Might be 1 (login) or 2 (signup)
            
            // Role selection (radio buttons in login, select in signup if not updated, but we made them cards in login and select in signup)
            let selectedRole = '';
            
            // Try radio buttons (login)
            const roleRadios = form.querySelectorAll('input[name="role"]:checked');
            if(roleRadios.length > 0) {
                selectedRole = roleRadios[0].value;
            } else {
                // Try select dropdown (signup)
                const roleSelect = form.querySelector('select[name="role"], select.form-control');
                if(roleSelect && roleSelect.value) {
                    selectedRole = roleSelect.value;
                }
            }

            if (!selectedRole) {
                showError(form, 'Please select a role.');
                return;
            }

            // Validate password(s)
            let passwordValid = true;
            passwordInputs.forEach(input => {
                if (!validatePassword(input.value)) {
                    passwordValid = false;
                }
            });

            if (!passwordValid) {
                showError(form, 'Password must be at least 6 characters long.');
                return;
            }

            // If signup form, check if passwords match
            if (passwordInputs.length === 2) {
                if (passwordInputs[0].value !== passwordInputs[1].value) {
                    showError(form, 'Passwords do not match.');
                    return;
                }
            }

            // Authentication Successful (Mock)
            // Store session
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userRole', selectedRole);
            
            const emailValue = emailInput ? emailInput.value : '';
            if (emailValue) {
                const namePart = emailValue.split('@')[0];
                const displayName = namePart.charAt(0).toUpperCase() + namePart.slice(1);
                localStorage.setItem('userName', displayName);
            } else {
                localStorage.setItem('userName', selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1));
            }

            // Redirect to appropriate dashboard
            window.location.href = `${selectedRole}-dashboard.html`;
        });
    });

    // ==========================================
    // 3. Global Navigation State & 404 Routing
    // ==========================================
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userRole = localStorage.getItem('userRole');

    // Handle Navbar updates across all pages
    const desktopNavActions = document.querySelector('.nav-actions');
    const mobileNavLinks = document.querySelector('.mobile-nav-links');

    const updateNavUI = () => {
        const dashboardBtnHTML = `<a href="${userRole}-dashboard.html" class="btn btn-primary text-center">Dashboard</a>`;
        
        if (desktopNavActions) {
            desktopNavActions.innerHTML = dashboardBtnHTML;
        }
        
        if (mobileNavLinks) {
            // Remove Log In / Sign up
            const links = mobileNavLinks.querySelectorAll('a');
            links.forEach(link => {
                if (link.textContent.includes('Log In') || link.textContent.includes('Sign Up')) {
                    link.remove();
                }
            });
            // Add Dashboard button
            mobileNavLinks.insertAdjacentHTML('beforeend', `<a href="${userRole}-dashboard.html" class="btn btn-primary text-center mt-4 w-full">Dashboard</a>`);
        }
    };

    if (isLoggedIn && userRole) {
        updateNavUI();
    }

    // Handle 404 page dynamic buttons
    const notFoundBtns = document.getElementById('not-found-actions');
    if (notFoundBtns) {
        if (isLoggedIn && userRole) {
            notFoundBtns.innerHTML = `
                <a href="index.html" onclick="window.location.assign('index.html'); return false;" class="btn btn-primary">
                    Return to Home
                </a>
                <a href="${userRole}-dashboard.html" onclick="window.location.assign('${userRole}-dashboard.html'); return false;" class="btn btn-outline">
                    Return to Dashboard
                </a>
            `;
        } else {
            notFoundBtns.innerHTML = `
                <a href="index.html" onclick="window.location.assign('index.html'); return false;" class="btn btn-primary">
                    Return to Home
                </a>
                <a href="login.html" onclick="window.location.assign('login.html'); return false;" class="btn btn-outline">
                    Log In
                </a>
            `;
        }
    }

    // Handle password visibility toggle
    const passwordToggles = document.querySelectorAll('.password-toggle');
    passwordToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const input = toggle.previousElementSibling;
            if (input && (input.type === 'password' || input.type === 'text')) {
                if (input.type === 'password') {
                    input.type = 'text';
                    toggle.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m2 2 20 20"/><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/></svg>`;
                } else {
                    input.type = 'password';
                    toggle.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`;
                }
            }
        });
    });

});
