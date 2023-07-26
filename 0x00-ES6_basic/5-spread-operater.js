export default function concatArrays(array1, array2, string) {
    const concated_arrays = [...array1,...array2, ...string]
    return concated_arrays;

}