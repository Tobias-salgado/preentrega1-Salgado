import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <h1 className='col-12'>{greeting}</h1>
            </div>
        </div>
    )
}

export default ItemListContainer