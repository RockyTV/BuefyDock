<script>
export default {
    fetch ({params, redirect}) {
        redirect(301, `/mod/${params.id}`)
    }
}
</script>