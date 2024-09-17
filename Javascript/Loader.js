        // Set loading duration (in milliseconds)
        const loadingDuration = 3000; // 3 seconds

        setTimeout(() => {
            const loadingText = document.getElementById('loadingText');
            loadingText.classList.add('zoom');
        }, loadingDuration);