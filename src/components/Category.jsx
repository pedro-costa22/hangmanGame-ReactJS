import './Category.css';

function Category({category}){
    return (
        <div className='category'>
            <p>Categoria selecionada: <span>{category}</span> </p>
        </div>
    )
};

export default Category;