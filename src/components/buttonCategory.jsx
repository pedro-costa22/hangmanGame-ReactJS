import './ButtonCategory.css';

function buttonCategory({handleCategory, category, color}){
    return (
        <button className={`btnCategory ${color}`} onClick={() => handleCategory(category)}>{category}</button>
    )
};

export default buttonCategory;