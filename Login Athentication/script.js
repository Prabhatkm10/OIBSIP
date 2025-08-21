  // Simple frontend logic for demo (no backend/auth)
        const loginForm = document.getElementById('loginForm');
        const registerLink = document.getElementById('registerLink');
        const registerForm = document.getElementById('registerForm');
        const loginLink = document.getElementById('loginLink');
        const secureMsg = document.getElementById('secureMsg');

        registerLink.onclick = function(e){
            e.preventDefault();
            loginForm.style.display = 'none';
            registerForm.style.display = '';
        };
        loginLink.onclick = function(e){
            e.preventDefault();
            registerForm.style.display = 'none';
            loginForm.style.display = '';
        };
        loginForm.onsubmit = function(e){
            e.preventDefault();
            secureMsg.style.display = '';
        };
        registerForm.onsubmit = function(e){
            e.preventDefault();
            alert('Registration successful! Now log in.');
            registerForm.style.display = 'none';
            loginForm.style.display = '';
        };