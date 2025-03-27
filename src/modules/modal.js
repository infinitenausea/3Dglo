const modal = () => {
    const modal = document.querySelector('.popup');
    const modalContent = modal.querySelector('.popup-content');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');

    const isMobile = window.innerWidth < 768;

    const animationDuration = 300; // мс
    const animationSteps = 20;


    const openModalWithAnimation = () => {
        if (isMobile) {
            modal.style.display = 'block';
            modalContent.style.opacity = '1';
            return;
        }

        modal.style.display = 'block';
        modalContent.style.opacity = '0';
        modalContent.style.transform = 'scale(0.7)';

        let currentStep = 0;
        const stepTime = animationDuration / animationSteps;

        const animationInterval = setInterval(() => {
            currentStep++;

            const progress = currentStep / animationSteps;
            modalContent.style.opacity = progress.toString();
            modalContent.style.transform = `scale(${0.7 + (progress * 0.3)})`;

            if (currentStep >= animationSteps) {
                clearInterval(animationInterval);
                modalContent.style.opacity = '1';
                modalContent.style.transform = 'scale(1)';
            }
        }, stepTime);
    };

    const closeModalWithAnimation = () => {
        if (isMobile) {
            modal.style.display = 'none';
            return;
        }

        let currentStep = animationSteps;

        const animationInterval = setInterval(() => {
            currentStep--;

            const progress = currentStep / animationSteps;
            modalContent.style.opacity = progress.toString();
            modalContent.style.transform = `scale(${0.7 + (progress * 0.3)})`;

            if (currentStep <= 0) {
                clearInterval(animationInterval);
                modal.style.display = 'none';
                modalContent.style.opacity = '1';
                modalContent.style.transform = 'scale(1)';
            }
        }, animationDuration / animationSteps);
    };

    buttons.forEach(btn => {
        btn.addEventListener('click', openModalWithAnimation);
    });

    closeBtn.addEventListener('click', closeModalWithAnimation);

    window.addEventListener('resize', () => {
        isMobile = window.innerWidth < 768;
    });
};

export default modal;