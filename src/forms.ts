const formData = (form: HTMLFormElement) => {
    const inputs = form.querySelectorAll('input, select, textarea');
    let values: { [key: string]: string } = {};

    // @ts-ignore
    inputs.forEach((input: HTMLInputElement) => {
        values[input.id] = input.value;
    });

    return values;
}

export {formData};