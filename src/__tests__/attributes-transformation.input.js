const object = {
  first: 'one-in-object',
  second: 'two-in-object',
};

const array = ['arr-one', 'arr-two'];

module.exports = pug`
  div
    .one.two
    div(className="one two")
    div(className=100)
    div(className=array)
    div(className=object)
    div(className=['one', 'two'])
    div(className=['one', 'two'].join(' '))
    div(className={first: true})

    .mix(className="one two")
    .mix(className=100)
    .mix(className=array)
    .mix(className=object)
    .mix(className=['one', 'two'])
    .mix(className=['one', 'two'].join(' '))
    .mix(className={first: true})
`;
