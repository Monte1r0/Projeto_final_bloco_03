import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import CardCategorias from '../cardCategorias/CardCategorias';
import { buscar } from '../../../services/Service';
import { Dna } from '@phosphor-icons/react';

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  let navigate = useNavigate();


  async function buscarCategorias() {
    try {
      await buscar('/categorias', setCategorias, {
       
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        alert('Algo deu Errado')
        
      }
    }
  }



  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);
  return (
    <>
      {categorias.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categoria) => (
              <>
                <CardCategorias key={categoria.id} categoria={categoria} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategorias;