import {usePage} from "@inertiajs/react";

export default function HeaderLayout() {
    const user = usePage().props.auth.user
    return (<>

            {user && (<h1>user.name</h1>)}

        {!user && (<h1>No estoy autenticado</h1>)}


        </>)

}
