import styled from 'styled-components';

export const WebNavContainer =styled.div`
    display: flex;
    width: 100%;
    padding: 1px 40px;
    margin: 1px auto;
    /* grid-columns-template: 1fr 8fr; */
    align-items: center;
    justify-content: space-around;
    position: fixed;
    background: white;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    border-bottom: 1px solid rgb(200,200,200);
`

export const WebNavItems = styled.div`
    display: flex;
    gap: 35px;
    font-size: 15px;
    padding: 10px 20px;
    
    .items{
        cursor: pointer;
    }
`

export const CategoriesContainer = styled.div`

    width: 95%;
    margin: 0 auto;

    h3{
        text-align: center;
        font-size: 50px;
    }

    .categories_section{
        display: grid;
        grid-template-columns:1fr 1fr 1fr 1fr ;
        gap: 20px;
        margin-top: 30px;
    }   

    .category{
        width: auto;
        height: 10cm;
        position: relative;
        cursor: pointer;
        transition: .3s;
        background-position: center;
        object-fit: contain;
    }

    .category > h3{
        position: absolute;
        bottom: 30px;
        left: 30px;
        font-size: 26px;
        text-shadow: 0 9px 15px rgba(0,0,0,0.5);
        font-weight: 600;
        color: white;
      }
      
      .category:hover{
        transform: scale(1.1);
      }

    @media only screen and (max-width: 500px){
        width: 90%;
        
        .categories_section{
            display: flex;
            flex-direction: column;
        }

        .category{
            height: 7cm;
        }

        h3{
            font-size: 30px;
        }


    }
`

export const MobileNavContainer = styled.div`
width: 90%;
    .nav_compo > h3{
  font-size: 20px;
}

/* .head-nav{
  font-size: ;
} */

.nav-head-container > h3{
  font-size: 0.2rem;
}

.nav-menu > li{
  font-size: 16px;
}

.head-nav{
  position: absolute;
  z-index: 9999999;
  background: #FFD700;
  width: 100%;
  height: 100vh;
  color: white;
  padding: 20px 10%;
  transition: .4s;
  box-sizing: border-box;
}

.head-nav > .nav-head-container{
  display: flex;
  align-items: center;
  justify-content: space-between;

}

.head-nav > .nav-head-container > h3{
  font-size: 28px;
}

.head-nav > .nav-menu{
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 20px;
}

.head-nav > .nav-menu > a > li{
  list-style-type: none;
  margin-left:16px;
  text-transform: uppercase;
  font-weight: lighter;
  color: white;
}

`