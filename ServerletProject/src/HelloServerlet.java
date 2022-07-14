

import java.io.IOException;
import java.io.PrintWriter;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class HelloServerlet
 */
@WebServlet("/HelloServerlet")
public class HelloServerlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * Default constructor. 
     */
    public HelloServerlet() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter pw = response.getWriter(); 
		String fname = request.getParameter("firstname");
		String lname = request.getParameter("lastname");
		String phn = request.getParameter("mobile");
		String add = request.getParameter("address");
		
		
	    String cssTag = "<link rel='stylesheet' type='text/css' href='css/styles.css'>";
	    pw.println("<head><title>Sample serverlet application</title>"+cssTag+"</head>");
		pw.println("<div class='box'>"
				+ "<h1>Your details...<br></h1>"
				
				+ "<div class='text1'>"
				+ "Firstname:" + " " + fname 
				+ "<br>Lastname:" + " " + lname
				+ "<br>Mobile no:" + " " + phn
				+ "<br>Address:" + " " + add 
				+ "</div>"
				+ "</div>");
		pw.close();
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
