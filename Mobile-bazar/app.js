// search phone 
const searchPhone = () => {
    const searchFild = document.getElementById('search-fild');
    const searchText = searchFild.value;

    // clear data 
    searchFild.value = '';

    // search phone
    if (searchText == '') {
        alert('place type carent name')
    }
    else {
        // load data 
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => phoneResult(data.data))
    }
}
// phone search result 

const phoneResult = phones => {
    const phoneResultFild = document.getElementById('phone-result');
    phoneResultFild.textContent = '';
    phones.forEach(phone => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-80">
                    <img src="${phone.image}" class="card-img-top" alt="...">
                    <div class="card-body card_title">
                        <h5 class="card-title">${phone.brand}</h5>
                        <p class="card-text">${phone.phone_name}</p>
                    </div>
                    <div class="text-center mb-3">
                        <button onclick="phoneDetails()" type="button" class="btn btn-primary">Details</button>
                    </div>
                </div>
        `;
        phoneResultFild.appendChild(div);
    });
}

// phone details

const phoneDetails = () => {


    // load data 
    const url = `https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089`;
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.data.slug))

}



