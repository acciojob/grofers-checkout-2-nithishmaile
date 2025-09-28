//your code here
const getSumBtn = document.createElement("button");
const table=document.getElementById("table");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
const prices=document.querySelectorAll(".prices");
let totalPrice=0;

const getSum = () => {
//Add your code here
    for(let cost of prices){
        totalPrice+=Number(cost.innerHTML)
    }
    let trElement=document.createElement("tr");
    table.appendChild(trElement);
    let tdElement=document.createElement("td");
    tdElement.textContent="Total Price";
    trElement.appendChild(tdElement)
    let td2Element=document.createElement("td");
    td2Element.innerHTML=`${totalPrice}`;
	td2Element.setAttribute("data-ns-test","grandTotal");
    trElement.appendChild(td2Element);
  
};

getSumBtn.addEventListener("click", getSum);

