import nodemailer from 'nodemailer';

// Configurações do transporte de email
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'seu-email@gmail.com',
        pass: 'sua-senha',
    },
});

// Função para enviar o email
async function enviarEmail(destinatario: string, assunto: string, corpo: string) {
    try {
        const info = await transporter.sendMail({
            from: 'seu-email@gmail.com',
            to: destinatario,
            subject: assunto,
            text: corpo,
        });

        console.log('Email enviado:', info.response);
    } catch (error) {
        console.error('Erro ao enviar email:', error);
    }
}


// Exemplo de uso
const destinatario = 'destinatario@example.com';
const assunto = 'Assunto do email';
const corpo = 'Conteúdo do email';

enviarEmail(destinatario, assunto, corpo);