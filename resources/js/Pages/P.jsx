export default function P ({user}){
 return (
    <>
        {!user && (
            <div>
                <p>Usuario no autenticado</p>
            </div>
        )}
    </>
 );
}
