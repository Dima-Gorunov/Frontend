import React from 'react';

const UserList: React.FC = ({Users}: any) => {
    return (
        <div>
            {Users
                ? Users.map((e: string) => (
                    <div>
                        {e}
                    </div>
                ))
                :"qweqwqwqq"
            }
        </div>
    );
};

export default UserList