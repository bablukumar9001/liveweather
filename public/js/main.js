// https://api.openweathermap.org/data/2.5/weather?q=ghaziabad&appid=6c22d87f92d2e845c3ea65e509700b25


const cityName= document.getElementById('cityName');
const submitBtn= document.getElementById('submitBtn')
const city_name= document.getElementById('city_name')
const temp_real_val= document.getElementById('temp')
const temp_status= document.getElementById('temp_status')
const datahide=document.querySelector(".middle_layer")


// console.log("hello world")
 
const getInfo= async(event)=>{
     event.preventDefault();
     let cityVal = cityName.value;
     if(cityVal===" "){
         city_name.innerText="please write the name before search"
         datahide.classList.add('data_hide')
     }else{
        try{
             let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=6c22d87f92d2e845c3ea65e509700b25`
             const response =await fetch(url)
             const data=await response.json()
             const arrData = [data]  
             console.log(arrData) 

             city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`
                   
            const tempK=arrData[0].main.temp
             const withoutDec=tempK - 273
             let tempC = Math.trunc(withoutDec )
                  

              console.log(tempC)
             temp_real_val.innerText=tempC
             
             //  condition to check sunny or cloudy
             
             const tempmood=arrData[0].weather[0].main

            if(tempmood==='Clear'){
                temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68 ' ></i>"
            }else if (tempmood==='Clouds'){
                temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6 ' ></i>"
                 
            }else if (tempmood==='Rain'){
                temp_status.innerHTML="<i class='fas fa-rain' style='color:#a4b0be ' ></i>"
       
        }   else{
            temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68 ' ></i>"
        }      
          datahide.classList.remove('data_hide')
     }
     catch{
        city_name.innerText="Please enter the correct city name "
        datahide.classList.add('data_hide')
     }
}
}

submitBtn.addEventListener("click",getInfo)




// set time date 


// const curDate=document.getElementById('date')
// let weathercon=document.getElementById('weathercon')

const tempStatus='clouds';

const getCurrentDay=()=>{
     var weekday =new Array (7);
     weekday[0]="Sunday"
     weekday[1]="Monday"
     weekday[2]="Tueday"
     weekday[3]="Wedday"
     weekday[4]="Thuday"
     weekday[5]="Friday"
     weekday[6]="Satday"



let currentTime=new Date();

let days=weekday[currentTime.getDay()]
let day = document.getElementById('day')
day.innerText=days

}
   getCurrentDay()


const getCurrentDate=()=>{
    
     var mth = new Array(12);

            mth[0]  =     "Jan"
            mth[1]  =     "Feb"
            mth[2]  =     "Mar"
            mth[3]  =     "Apr"
            mth[4]  =     "May",
            mth[5]  =     "June"
            mth[6]  =     "July"
            mth[7]  =     "Aug"
            mth[8]  =     "Sep"
            mth[9]  =     "Oct"
            mth[10]  =     "Nov"
            mth[11]  =     "Dec"



let now =new Date();
var month = mth[now.getMonth()];

var date=now.getDate()

todayData=document.getElementById('today_data')

const  dateMonth= `${date} ${month}`
console.log(dateMonth)
todayData.innerText=dateMonth
console.log(month)

}
getCurrentDate()
