
export function Footer() {
  return (
    <footer className="bg-muted/50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Dev.Portfolio
            </h3>
            <p className="text-muted-foreground">Criando o futuro, um código por vez.</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground">
              © 2024 Dev.Portfolio. Todos os direitos reservados.
            </p>
            <p className="text-sm text-muted-foreground">
              Desenvolvido com ❤️ usando React e Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
