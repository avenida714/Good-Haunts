const reviewId = document.URL.split('/')[5];
const hauntId = document.getElementsByName("hauntId")[0].value;

const button = document.getElementById("delete-review");

button.addEventListener("click", (e) => {
    (async function() {
        const fetchCall =  await fetch('/reviews/' + reviewId, {
            method: 'DELETE',
        });
        window.location.href = `/haunts/` + hauntId;
        // console.log(fetchCall.url) // THIS CONSOLE.LOG MADE THE SITE WORK DON'T TOUCH IT GODDAMNIT
        // JK BUT WE ARE SAVING THIS COMMENT FOR LEGACY
        return fetchCall;
    })();
});