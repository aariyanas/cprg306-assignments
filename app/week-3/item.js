import React from 'react';

export default function Item ({name, quantity, category}){
    return(
        <div>
            <ul className="list-disc mb-4">
                <li>{name} x{quantity} TEST</li>
                <ul>
                    <li>{category}</li>
                </ul>
            </ul>
        </div>
    );
} 

