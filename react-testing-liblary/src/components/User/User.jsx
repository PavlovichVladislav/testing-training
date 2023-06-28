import React from "react";

const User = ({ user, onDelete }) => {
   return (
      <div id="user">
         {user.name}
         <button id="user-delete" onClick={() => onDelete(user.id)}>
            delete
         </button>
      </div>
   );
};

export default User;
