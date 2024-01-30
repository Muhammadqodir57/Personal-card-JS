//----------------VERIABLES----------------
const elBody = document.body;
const elDiv = document.createElement('div');
const elDiv_2 = document.createElement('div');
const elImg = document.createElement('img');
const elTitle = document.createElement('h3');
const elText = document.createElement('p');
const elText_2 = document.createElement('p');
const elText_3 = document.createElement('p');
const elText_4 = document.createElement('p');
const elTitle_2 = document.createElement('h6');
const elLink = document.createElement('a');

//----------------STYLE----------------
elImg.src = './logo.svg';

elBody.style = `
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh
`
elImg.style = `
    margin-top: 80px;
`
elDiv.style = `
    text-align: center;
    width: 760px;
    border-radius: 50px;
    background: #FFF;
`
elTitle.style = `
    margin: 0 auto;
    margin-bottom: 12px;
    color: rgba(0, 0, 0, 0.80);
    font-family: Catamaran;
    font-size: 45px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
elText.style = `
    margin: 0 auto;
    margin-bottom: 48px;
    color: #909090;
    font-family: Catamaran;
    font-size: 35px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`
elDiv_2.style = `
    width: 610px;
    margin-bottom:50px;
    text-align: start;
    border-radius: 50px;
    background: #FFF;
`
elText_2.style = `
    margin: 0 auto;
    color: #505050;
    font-family: Catamaran;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`
elText_3.style = `
    margin: 0 auto;
    margin-bottom: 40px;
    color: #505050;
    font-family: Catamaran;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`
elText_4.style = `
    margin: 0 auto;
    margin-bottom: 40px;
    color: #505050;
    font-family: Catamaran;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`
elTitle_2.style = `
    margin: 0 auto;
    color: #505050;
    font-family: Catamaran;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`
elLink.style = `
    color: rgba(80, 80, 80, 0.50);
    text-align: center;
    font-family: Montserrat;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -1.6px;
    text-decoration-line: underline;
`
//----------------TEXT-CONTENT----------------

elTitle.textContent = 'The Grand Creator!';
elText.textContent = '22 / Male';
elText_2.textContent = 'Hey there, stranger!';
elText_3.textContent = 'I’m Ehsan. A creative UX Designer working from home. I hope this pack of user persona profiles and personality cards prove useful for you and your users.';
elText_4.textContent = 'You can follow me in social media and contact me for collaboration.';
elTitle_2.textContent = 'Cheers.';
elLink.textContent = 'www.ehsan.cc'
//----------------APPEND----------------

elBody.append(elDiv);
elDiv.append(elImg);
elDiv.append(elTitle);
elDiv.append(elText);
elDiv.append(elDiv_2);
elDiv_2.append(elText_2);
elDiv_2.append(elText_3);
elDiv_2.append(elText_4);
elDiv_2.append(elTitle_2);
elDiv.append(elLink);
