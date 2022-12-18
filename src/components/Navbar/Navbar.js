import './Navbar.css'
import Button from './Button/Button'
import CartWidget from './CartWidget/CartWidget'


const Navbar = (props) => {
    console.log(props)

    const handlOnClick = () => {
        alert('hice click')
    }

    const handlOnClick2 = () => {
        alert('hice otro click')
    }


    return (
		<nav className='navbar'>
			<h1 style={{ color: props.colorTitle}} >BROKER 
            <img src='./images/skateboarder.png'/> </h1> 
			<Button colorText='black' func={handlOnClick}>INICIO</Button>
            <Button colorText='black' func={handlOnClick2}>PRODUCTOS</Button>
            <Button>CONTACTO</Button>
            <Button>LOGIN</Button>
            <CartWidget />
  
           
            
        </nav>
    )
}

export default Navbar
