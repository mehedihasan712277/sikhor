const page = (props: { params: { category_name: string } }) => {
    return (
        <div>{props.params.category_name}</div>
    )
}

export default page