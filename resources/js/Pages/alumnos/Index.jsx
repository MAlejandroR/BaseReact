
import Table from "@/Components/Table.jsx";
import Layout from "@/Layouts/Layout.jsx";

export default function Index(props) {
    const name = props.name;
    return (
        <Layout title={`Listado de ${name}`}>
            <Table  {...props} />
        </Layout>
    );
}
