import './MealItemForm.module.css'

const MealItem = () => {
    return (
        <div>
            <div className="AmountTextAndNumber">
                <h3>
                    Amount
                </h3>
                <input 
                    type="text"
                ></input>
            </div>
            <button>+Add</button>
        </div>
    )
};

export default MealItem;