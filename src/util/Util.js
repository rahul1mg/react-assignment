exports.getJobById = (jobs, id) => {
    return jobs.find((element) =>
        element.id === id
    )
}