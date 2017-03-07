// TODO Move names to consts
export default name => {
  switch (name) {
    case 'coordinate':
      return {
        name: 'coordinate',
        message: 'This field is required'
      };

    case 'description':
      return {
        name: 'description',
        message: 'This field is required.'
      };

    case 'image':
      return {
        name: 'image',
        message: 'You must add an image.'
      };

    default:
      throw new Error(`No validation strategy for the ${name}`);
  }
};