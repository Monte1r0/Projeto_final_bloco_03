
import { Link,  } from 'react-router-dom'




function Navbar() {


  return (
    <>
     <div className='w-full bg-[#F02925] text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
          <Link to='/' className='text-2xl font-bold uppercase'>FARMACOM</Link>

            <div className='flex gap-4 text-black'>
            <div className='hover:underline'></div>
            <Link to='/produtos' className='hover:underline'>Produtos</Link>
            <Link to='/categorias' className='hover:underline'>Categorias</Link>
            <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar Categoria</Link>
              <div className='hover:underline'></div>
             
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar