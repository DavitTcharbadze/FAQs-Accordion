/* eslint-disable react/no-unescaped-entities */
import classes from '../modules/Faqs.module.scss';
import Star from '../assets/images/icon-star.svg';
import Minus from '../assets/images/icon-minus.svg';
import Plus from '../assets/images/icon-plus.svg';
import { useState } from 'react';

export default function Faqs() {

    const [showFirstModal, setShowFirstModal] = useState(false);
    const [showSecondModal, setShowSecondModal] = useState(false);
    const [showThirdModal, setShowThirdModal] = useState(false);

    const FirstClickHandler = () => {
        setShowFirstModal(true);
        setShowSecondModal(false);
        setShowThirdModal(false);
    } 
    const SecondClickHandler = () => {
        setShowSecondModal(true);
        setShowThirdModal(false);
        setShowFirstModal(false);
    }
    const ThirdClickHandler = () => {
        setShowThirdModal(true);
        setShowFirstModal(false);
        setShowSecondModal(false);
    }
    const onCloseHandler = () =>{
        setShowFirstModal(false);
        setShowSecondModal(false);
        setShowThirdModal(false);
    }
  return (
    <div className={`${classes['faqs-wrapper']} ${showFirstModal === true && classes['faqs-wrapper2']} ${showSecondModal === true && classes['faqs-wrapper2']} ${showThirdModal === true && classes['faqs-wrapper2']}`}>
        <div className={classes['header-section']}>
            <img src={Star} alt="" /> 
            <b><h1>FAQs</h1></b>
        </div>
      

        <div className={classes['main-question']}>
            <h2 >What is Frontent Mentor, and how will it help me?</h2> 
            <img src={Minus} alt="" />
        </div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Explicabo <br /> atque odit maxime, delectus officia corporis voluptates ipsa animi, <br /> 
        dolores velit voluptate facilis nostrum tempore aliquid.
         Excepturi <br /> magni veritatis doloribus pariatur!</p>
    <br /><br /><br /><br />

        <div className={classes['first-line']}></div>
         <div className={classes['first-question']}>
            <h2 onClick={FirstClickHandler}>Is Fronted Mentor free?</h2>
            <img onClick={FirstClickHandler} className={classes['plus-image']} src={Plus} alt="" />
        </div> <br /> <br /> <br />
        {showFirstModal === true && (
            <div className={classes['firstModal-wrapper']}>
                <h3 className={classes['first-answer']}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Explicabo <br /> atque odit maxime, delectus officia corporis voluptates ipsa animi,
                </h3>
                <img 
                className={classes['first-minus']}
                onClick={onCloseHandler} 
                src={Minus} 
                alt="" />
            </div>
            
        )}
        <div className={classes['second-line']}></div>
         <div className={`${classes['second-question']} ${showFirstModal === true && classes['second-question2']}`}>
            <h2 onClick={SecondClickHandler}>can I use Frontend Mentor projects in my portfolio?</h2>
            <img onClick={SecondClickHandler} className={classes['plus-image']} src={Plus} alt="" />
        </div> <br /> <br /> <br />
        {showSecondModal === true && (
            <div className={classes['secondModal-wrapper']}>
                <h3 className={classes['second-answer']}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Explicabo <br /> atque odit maxime, delectus officia corporis voluptates ipsa animi,
                </h3>
                <img 
                className={classes['second-minus']}
                onClick={onCloseHandler} 
                src={Minus} 
                alt="" />
            </div>
            
        )}
        <div className={classes['third-line']}></div>
         <div className={`${classes['third-question']} ${showSecondModal === true && classes['third-question2']}`}>
            <h2 onClick={ThirdClickHandler}>How can i get help if I'm stuck on a challenge?</h2>
            <img onClick={ThirdClickHandler} className={classes['plus-image']} src={Plus} alt="" />
        </div>
        {showThirdModal === true && (
            <div className={classes['thirdModal-wrapper']}>
                <h3 className={classes['third-answer']}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Explicabo <br /> atque odit maxime, delectus officia corporis voluptates ipsa animi,
                </h3>
                <img 
                className={classes['third-minus']}
                onClick={onCloseHandler} 
                src={Minus} 
                alt="" />
            </div>
            
        )}
        <div className={classes['forth-line']}></div>
    </div>
  )
}
