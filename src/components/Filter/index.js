import React from 'react'
import SelectFilter from '../SelectFilter'
import ContainerCheckBox from '../ContainerCheckBox'
import iconPrimary from '../../images/png/Design sem nome(1622) (1).jpg'
const Filter = () => {
    return (

        <div className='filter'>

            <button>Aplicar filtros</button>

            <div className='container_filter_options'>
                <p>Categorias</p>
                <SelectFilter option={
                    <>
                        <option>Selecione</option>
                        <option>ACESSÓRIOS PARA ENGATES</option>
                        <option>FIXO</option>

                    </>

                } />

                <p>Modelo </p>
                <SelectFilter option={
                    <>
                        <option>Selecione</option>
                        <option>2003 OU ANTERIOR</option>
                        <option>2004</option>
                        <option>2005</option>
                        <option>2006</option>
                        <option>2007</option>
                        <option>2008</option>
                        <option>2009</option>
                        <option>2010</option>
                        <option>2011</option>
                        <option>2012</option>
                        <option>2013</option>

                    </>

                } />


                <p>CARRO</p>
                <ContainerCheckBox id={1} image={iconPrimary} name="AUDI" />
                <ContainerCheckBox id={2} name="BMW" />
                <ContainerCheckBox id={3} name="CHERY" />
                <ContainerCheckBox id={4} name="CHRYSLER" />
                <ContainerCheckBox id={5} name="CITROEN" />
                <ContainerCheckBox id={6} name="DODGE" />
                <ContainerCheckBox id={7} name="FIAT" />
                <ContainerCheckBox id={8} name="FORD" />
                <ContainerCheckBox id={9} name="GENERAL MOTORS" />
                <ContainerCheckBox id={10} name="HIUNDAY" />
                <ContainerCheckBox id={11} name="HONDA" />
                <ContainerCheckBox id={12} name="IVECO" />
                <ContainerCheckBox name="JAC" />
                <ContainerCheckBox name="KIA" />
                <ContainerCheckBox name="LAND ROVER" />
                <ContainerCheckBox name="MERCEDEZ" />
                <ContainerCheckBox name="MITSUBISHI" />
                <ContainerCheckBox name="NISSAN" />
                <ContainerCheckBox name="PEUGEOT" />
                <ContainerCheckBox name="RENAULT" />
                <ContainerCheckBox name="SUBARU" />
                <ContainerCheckBox name="SUZUKI" />
                <ContainerCheckBox name="TOYOTA" />




            </div>

        </div>

    )
}

export default Filter