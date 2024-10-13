        // 10c.
        const jsButton = document.querySelector('.js-button');
        console.log(jsButton.classList.contains('js-button'));

        // 10d.
        function gammingButton() {
            const btn = document.querySelector('.js-btn');
            if (!btn.classList.contains('is-toggle')) {
                btn.classList.add('is-toggle');
            } else {
                btn.classList.remove('is-toggle');
            }
        }

        // 10e.
        function musicButton() {
            const btn = document.querySelector('.music-btn');
            if (!btn.classList.contains('is-toggle')) {
                btn.classList.add('is-toggle');
            } else {
                btn.classList.remove('is-toggle');
            }
        }

        function techButton() {
            const btn = document.querySelector('.tech-btn');
            if (!btn.classList.contains('is-toggle')) {
                btn.classList.add('is-toggle');
            } else {
                btn.classList.remove('is-toggle');
            }
        }

        // 10f.
        function toggleButton(selector) {
            const button = document.querySelector(selector);
            if (!button.classList.contains('is-toggled')) {
                turnOffPreviousButton();
                button.classList.add('is-toggled');
            } else {
                button.classList.remove('is-toggled');
            }
        }

        function turnOffPreviousButton() {
            const previousButton = document.querySelector('.is-toggled');
            if (previousButton) {
                previousButton.classList.remove('is-toggled')
            }
        }