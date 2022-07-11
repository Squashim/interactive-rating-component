const ratingPage = document.querySelector('.rating-page');
const thanksPage = document.querySelector('.thank-you-page');
const submitBtn = document.querySelector('.submit');
const radioBtns = document.querySelectorAll('input[name="rating"]');

submitBtn.addEventListener('click', () => {
    let rating;
    radioBtns.forEach(button => {
        if(button.checked){
            rating = button.value;
        }
    });
    ratingPage.classList.add("hidden");
    thanksPage.classList.remove("hidden");
    document.querySelector('.number').textContent = `You selected ${rating} out of 5`;
});
