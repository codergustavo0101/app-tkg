import react from 'react'

const ContainerModel = ({ name, image }) => {
    return (

        <div className='container_model'>
            <p>{name}</p>
            {image != undefined
                ?
                <img src={image} />
                :
                <></>
            }
        </div>

    )
}

export default ContainerModel