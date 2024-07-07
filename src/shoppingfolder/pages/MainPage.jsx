import React,{useState} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer from '../components/Footer'
import WomenCollection from '../components/WomenCollection'
//import {Gents,Ladies} from '../data';
export const Gents={
  title:"Gents Fashion",
  image1:"assets/Gents/1.jpg",
  image2:"assets/Gents/3.jpg",
  image3:"assets/Gents/4.jpg",
  image4:"assets/Gents/2.jpg",
  image5:"assets/Gents/6.jpg",
  image6:"assets/Gents/5.jpg",
  price1: "599.INR",
  price2: "399.INR",
  price3: "499.INR",
  price4: "699.INR",
  price5: "799.INR",
  price6: "299.INR",
};
export const Ladies={
  title:"Ladies Fashion",
  image11:"assets/Women/11.jpg",
  image12:"assets/Women/13.jpg",
  image13:"assets/Women/14.jpg",
  image14:"assets/Women/12.jpg",
  image15:"assets/Women/16.jpg",
  image16:"assets/Women/15.jpg",
  price1: "599.INR",
  price2: "399.INR",
  price3: "499.INR",
  price4: "699.INR",
  price5: "799.INR",
  price6: "299.INR",
};



const MainPage = () => {
    const[gentsFashion, setGentsFashion] = useState(Gents);
    const[ladiesFashion,setLadiesFashion]= useState(Ladies);
    console.log(Gents);
  return (
    <div>
        <Header />
        <Banner />
        <Collections gentsFashion={gentsFashion} />
        <WomenCollection ladiesFashion={ladiesFashion}/> 
        <Footer />
    </div>
  );
}

export default MainPage