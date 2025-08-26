import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

interface EducationItem {
  degree?: string;
  institution?: string;
  year?: string;
}

interface ExperienceItem {
  role?: string;
  company?: string;
  years?: string;
  details?: string;
}

interface ResumeData {
  name?: string;
  email?: string;
  phone?: string;
  summary?: string;
  education?: EducationItem[];
  experience?: ExperienceItem[];
  skills?: string[];
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { template, data }: { template: string; data: ResumeData } = body;

    // Generate HTML directly instead of using React components
    const getHtmlContent = (template: string, data: ResumeData) => {
      // Helper function to format arrays
      const formatList = <T>(items: T[] | undefined, formatFn: (item: T) => string) => {
        if (!items || items.length === 0) return '';
        return items.map(item => formatFn(item)).join('');
      };

      // Format education items
      const educationHtml = formatList(data.education, (edu: EducationItem) => `
        <div style="margin-bottom: 15px;">
          <h3 style="margin: 0; color: #333;">${edu.degree || 'Degree'}</h3>
          <p style="margin: 5px 0; color: #666;">${edu.institution || ''} ${edu.year ? `(${edu.year})` : ''}</p>
        </div>
      `);

      // Format experience items
      const experienceHtml = formatList(data.experience, (exp: ExperienceItem) => `
        <div style="margin-bottom: 20px;">
          <h3 style="margin: 0; color: #333;">${exp.role || 'Position'}</h3>
          <p style="margin: 5px 0; color: #666; font-weight: bold;">${exp.company || ''} ${exp.years ? `| ${exp.years}` : ''}</p>
          <p style="margin: 5px 0; color: #444;">${exp.details || ''}</p>
        </div>
      `);

      // Format skills
      const skillsHtml = formatList(data.skills, (skill: string) => `
        <span style="display: inline-block; background: #f0f0f0; padding: 5px 10px; margin: 5px; border-radius: 15px; font-size: 14px;">
          ${skill}
        </span>
      `);

      // Template definitions
      const templates = {
        classic: `
          <div style="font-family: Arial, sans-serif; padding: 40px; max-width: 800px; margin: 0 auto;">
            <header style="text-align: center; margin-bottom: 30px; border-bottom: 2px solid #333; padding-bottom: 20px;">
              <h1 style="margin: 0; color: #2c3e50; font-size: 36px;">${data.name || 'Resume'}</h1>
              <div style="margin-top: 10px;">
                ${data.email ? `<span style="margin: 0 10px;">📧 ${data.email}</span>` : ''}
                ${data.phone ? `<span style="margin: 0 10px;">📞 ${data.phone}</span>` : ''}
              </div>
            </header>
            
            ${data.summary ? `
            <section style="margin-bottom: 25px;">
              <h2 style="color: #2c3e50; border-bottom: 1px solid #ddd; padding-bottom: 5px;">Summary</h2>
              <p style="line-height: 1.6; color: #555;">${data.summary}</p>
            </section>
            ` : ''}
            
            ${educationHtml ? `
            <section style="margin-bottom: 25px;">
              <h2 style="color: #2c3e50; border-bottom: 1px solid #ddd; padding-bottom: 5px;">Education</h2>
              ${educationHtml}
            </section>
            ` : ''}
            
            ${experienceHtml ? `
            <section style="margin-bottom: 25px;">
              <h2 style="color: #2c3e50; border-bottom: 1px solid #ddd; padding-bottom: 5px;">Experience</h2>
              ${experienceHtml}
            </section>
            ` : ''}
            
            ${skillsHtml ? `
            <section style="margin-bottom: 25px;">
              <h2 style="color: #2c3e50; border-bottom: 1px solid #ddd; padding-bottom: 5px;">Skills</h2>
              <div style="margin-top: 10px;">
                ${skillsHtml}
              </div>
            </section>
            ` : ''}
          </div>
        `,
        
        modern: `
          <div style="font-family: 'Helvetica Neue', Arial, sans-serif; padding: 40px; max-width: 800px; margin: 0 auto; background: #f9f9f9;">
            <header style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px; margin-bottom: 30px;">
              <h1 style="margin: 0; font-size: 38px; font-weight: 300;">${data.name || 'Resume'}</h1>
              <div style="margin-top: 15px; display: flex; gap: 20px; flex-wrap: wrap;">
                ${data.email ? `<span style="display: flex; align-items: center; gap: 5px;">📧 ${data.email}</span>` : ''}
                ${data.phone ? `<span style="display: flex; align-items: center; gap: 5px;">📞 ${data.phone}</span>` : ''}
              </div>
            </header>
            
            ${data.summary ? `
            <section style="background: white; padding: 25px; border-radius: 10px; margin-bottom: 25px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <h2 style="color: #667eea; margin-top: 0; font-weight: 500;">Professional Summary</h2>
              <p style="line-height: 1.6; color: #666;">${data.summary}</p>
            </section>
            ` : ''}
            
            ${experienceHtml ? `
            <section style="background: white; padding: 25px; border-radius: 10px; margin-bottom: 25px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <h2 style="color: #667eea; margin-top: 0; font-weight: 500;">Work Experience</h2>
              ${experienceHtml}
            </section>
            ` : ''}
            
            ${educationHtml ? `
            <section style="background: white; padding: 25px; border-radius: 10px; margin-bottom: 25px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <h2 style="color: #667eea; margin-top: 0; font-weight: 500;">Education</h2>
              ${educationHtml}
            </section>
            ` : ''}
            
            ${skillsHtml ? `
            <section style="background: white; padding: 25px; border-radius: 10px; margin-bottom: 25px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <h2 style="color: #667eea; margin-top: 0; font-weight: 500;">Skills</h2>
              <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 15px;">
                ${skillsHtml}
              </div>
            </section>
            ` : ''}
          </div>
        `,
        
        creative: `
          <div style="font-family: 'Comic Sans MS', cursive, sans-serif; padding: 40px; max-width: 800px; margin: 0 auto; background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);">
            <div style="background: white; border-radius: 20px; padding: 40px; box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
              <header style="text-align: center; margin-bottom: 30px;">
                <h1 style="margin: 0; color: #ff6b6b; font-size: 42px; text-shadow: 2px 2px 4px rgba(0,0,0,0.1);">${data.name || 'Resume'}</h1>
                <div style="margin-top: 15px; display: flex; justify-content: center; gap: 25px; flex-wrap: wrap;">
                  ${data.email ? `<span style="color: #4ecdc4; font-weight: bold;">📧 ${data.email}</span>` : ''}
                  ${data.phone ? `<span style="color: #4ecdc4; font-weight: bold;">📞 ${data.phone}</span>` : ''}
                </div>
              </header>
              
              ${data.summary ? `
              <section style="margin-bottom: 30px; padding: 20px; background: #fff5e6; border-radius: 15px; border-left: 5px solid #ff6b6b;">
                <h2 style="color: #ff6b6b; margin-top: 0; font-size: 24px;">About Me</h2>
                <p style="line-height: 1.6; color: #666; font-size: 16px;">${data.summary}</p>
              </section>
              ` : ''}
              
              ${experienceHtml ? `
              <section style="margin-bottom: 30px;">
                <h2 style="color: #ff6b6b; font-size: 24px; border-bottom: 3px dotted #4ecdc4; padding-bottom: 5px;">Experience</h2>
                ${experienceHtml}
              </section>
              ` : ''}
              
              ${educationHtml ? `
              <section style="margin-bottom: 30px;">
                <h2 style="color: #ff6b6b; font-size: 24px; border-bottom: 3px dotted #4ecdc4; padding-bottom: 5px;">Education</h2>
                ${educationHtml}
              </section>
              ` : ''}
              
              ${skillsHtml ? `
              <section style="margin-bottom: 30px;">
                <h2 style="color: #ff6b6b; font-size: 24px; border-bottom: 3px dotted #4ecdc4; padding-bottom: 5px;">Skills</h2>
                <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 15px;">
                  ${skillsHtml}
                </div>
              </section>
              ` : ''}
            </div>
          </div>
        `
      };
      
      const templateKey = template as keyof typeof templates;
      return templates[templateKey] || templates.classic;
    };

    const html = getHtmlContent(template, data);

    // Use Puppeteer to generate PDF
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.setContent(`<!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
          </style>
        </head>
        <body>${html}</body>
      </html>`);

    const pdfBuffer = await page.pdf({ 
      format: "A4",
      printBackground: true,
      margin: {
        top: '20px',
        right: '20px',
        bottom: '20px',
        left: '20px'
      }
    });
    await browser.close();

    // Return PDF
    return new NextResponse(Buffer.from(pdfBuffer), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="resume.pdf"',
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 }
    );
  } 
}