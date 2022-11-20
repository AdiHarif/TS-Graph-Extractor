export enum BinaryOperation {
    Add,
    Sub,
    Mul,
    Div,
    Assign,
    LessThan,
    GreaterThan,
    LessThanEqual,
    GreaterThanEqual,
    EqualEqual,
    NotEqual,
    EqualEqualEqual,
    NotEqualEqual,
    And,
    Or
}

export enum UnaryOperation {
    Plus,
    Minus,
    Not
}

export enum VertexType {
    Const,
    Variable,
    BinaryOperation,
    UnaryOperation,
    If,
    Phi
}
