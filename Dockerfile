# Use nginx as the web server
FROM nginx:alpine

# Copy the website files to nginx html directory
COPY index.html /usr/share/nginx/html/
COPY css/ /usr/share/nginx/html/css/
COPY js/ /usr/share/nginx/html/js/
COPY images/ /usr/share/nginx/html/images/
COPY aset/ /usr/share/nginx/html/aset/
COPY fonts/ /usr/share/nginx/html/fonts/
COPY Montserrat/ /usr/share/nginx/html/Montserrat/
COPY pages/ /usr/share/nginx/html/pages/
COPY favicon.svg /usr/share/nginx/html/
COPY favicon.png /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]