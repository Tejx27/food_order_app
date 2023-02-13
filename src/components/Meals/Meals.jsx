import React, { Fragment } from "react";
import MealsSummury from "./MealsSummury";
import AvalibleMeals from "./AvalibleMeals";

const Meals = ( ) => {
    return <Fragment>
        <MealsSummury />
        <AvalibleMeals />
    </Fragment>
};

export default Meals;