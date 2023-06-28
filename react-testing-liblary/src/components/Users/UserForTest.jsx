import React, { useState, useEffect } from "react";
import User from "../User/User";

const UserForTest = () => {
   const [users, setUsers] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      setIsLoading(true);
      fetch("https://jsonplaceholder.typicode.com/users")
         .then((response) => response.json())
         .then((data) => {
            setTimeout(() => {
               setUsers(data);
               setIsLoading(false);
            }, 1000);
         });
   }, []);

   const onDelete = (id) => {
      setUsers(users.filter((user) => user.id !== id));
   };

   return (
      <div>
         {isLoading && <h1 id="users-loading">Загрузка...</h1>}
         {(users.length > 0) && (
            <div id="users-list">
               {users.map((user) => (
                  <User onDelete={onDelete} user={user} />
               ))}
            </div>
         )}
      </div>
   );
};

export default UserForTest;
