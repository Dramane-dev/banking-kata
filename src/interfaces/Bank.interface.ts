export interface IBankAccount {
    getClientId(): string;
    getAmount(): number;
    getBalance(): number;
    setClientId(clientId: string): void;
    deposit(amount: number): string;
    withdrawal(amount: number): string;
    accountStatementPrinting(): void;
}
