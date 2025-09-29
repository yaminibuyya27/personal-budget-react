import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PieChart from './PieChart';
import D3Chart from './D3Chart';

function HomePage() {
  const [budgetData, setBudgetData] = useState([]);

  useEffect(()=> {
    axios.get('http://localhost:8000/budget')
    .then(function (response) {
         const data = response.data;
        setBudgetData(data.myBudget);
    })
    .catch(function (error) {
        console.error("Error in fetching the budget data: ", error);
    })
  }, [])

  return (
    <main className="center" id="main">

        <div className="page-area">

            <article>
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>
    
            <article>
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </article>
    
            <article>
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </article>
    
            <article>
                <h1>Free</h1>
                <p>
                    This app is free!!! And you are the only one holding your data!
                </p>
            </article>
    
            <article>
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>
    
            <article>
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </article>
    
            <article>
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </article>
    
            <article>
                <h1>Pie Chart</h1>
                <PieChart data={budgetData} />
            </article>
            <article>
                <h1>D3 Donut Chart</h1>
                <D3Chart data={budgetData} />
            </article>

        </div>

    </main>
  );
}

export default HomePage;
