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
                        <h5 class="card-title">Brand: ${phone.brand}</h5>
                        <p class="card-text">Phone name: ${phone.phone_name}</p>
                    </div>
                    <div class="text-center mb-3">
                        <button onclick="detailsButton('${phone.slug}')" type="button" class="btn btn-primary">Details</button>
                    </div>
                </div>
        `;
        phoneResultFild.appendChild(div);
    });
}

//details button

const detailsButton = details => {

    // load data 
    const url = `https://openapi.programming-hero.com/api/phone/${details}`;

    fetch(url)
        .then(res => res.json())
        .then(data => phoneDetails(data.data))

}

// phone details

const phoneDetails = phoneDetails => {
    const detailsPhone = document.getElementById('details');
    detailsPhone.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    
                    <div class="modal-header">
                        <img src="${phoneDetails.image}" class="card-img-top" alt="...">
                        
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Brand: ${phoneDetails.brand} </h5>
                        <h5  class="card-title">Name: ${phoneDetails.name}</h5>
                        <h5  class="card-title">Main Features: 
                        <ul>
                        <li><p>ChipSet: ${phoneDetails.mainFeatures.chipSet}</p></li>
                        <li><p>DisplaySize: ${phoneDetails.mainFeatures.displaySize}</p></li>
                        
                        <li><p>Memory: ${phoneDetails.mainFeatures.memory}</p></li>
                        </ul>
                        </h5>
                        <h5  class="card-title">others: 
                        <ul>
                        <li><p>Bluetooth: ${phoneDetails.others.Bluetooth} </p></li>
                        <li><p>GPS: ${phoneDetails.others.GPS} </p></li>
                        <li><p>NFC: ${phoneDetails.others.NFC} </p></li>
                        <li><p>Radio: ${phoneDetails.others.Radio} </p></li>
                        <li><p>USB: ${phoneDetails.others.USB} </p></li>
                        <li><p>WLAN: ${phoneDetails.others.WLAN} </p></li>
                        
                        </ul>
                        </h5>
                       <h5 class="card-title">releaseDate: ${phoneDetails.releaseDate}</h5>

                    </div>
                
    `;
    detailsPhone.appendChild(div);
}

